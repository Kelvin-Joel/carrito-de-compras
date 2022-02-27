import create from "zustand";
export const useStore = create((set, get) => ({
    ListApiProduct: [],
    ListAggregatedProducts: JSON.parse(localStorage.getItem('product')) === null ? [] : JSON.parse(localStorage.getItem('product')),
    OpenAddedProductsList: false,
    TotalCart: { TotalProducts: 0, TotalPrice: 0, TotalUnits: 0 },
    CategoryList: [],
    /**************************** */
    SaveProduct() {
        localStorage.setItem('product', JSON.stringify(get().ListAggregatedProducts))
    },

    ProductAdd(item) {
        const isProduct = get().ListAggregatedProducts.find(product => product.id === item.id) !== undefined
        if (isProduct) {
            alert('Producto Ya Esta Agregado!')
            return
        }
        const ProductNew = { ...item, cantidad: 1 }
        set({ ListAggregatedProducts: [...get().ListAggregatedProducts, ProductNew] })
        get().CalculeTotal();
        get().SaveProduct()
        console.log(get().ListAggregatedProducts)
    },

    /**************************************** */
    OpenAddedProductsWindow() {
        set({ OpenAddedProductsList: !get().OpenAddedProductsList })
    },
    /********************************** */

    IncreaseQuantity(item) {
        const updateCantidad = get().ListAggregatedProducts.map(product => product.id === item.id ?
            { ...product, cantidad: product.cantidad += 1 } : product)
        set({ ListAggregatedProducts: updateCantidad })
        get().CalculeTotal();
    },
    SubtractQuantity(item) {
        const updateCantidad = get().ListAggregatedProducts.map(product => product.id === item.id ?
            { ...product, cantidad: product.cantidad -= 1 } : product)
        set({ ListAggregatedProducts: updateCantidad })
        get().CalculeTotal();
    },
    CalculeTotal() {
        const ShopingCart = get().ListAggregatedProducts
        const TotalProducts = ShopingCart.length;
        const TotalPrice = ShopingCart.reduce((preciTotal, product) => preciTotal + product.price * product.cantidad, 0)
        const TotalUnits = ShopingCart.reduce((units, product) => units + product.cantidad, 0)
        set({ TotalCart: { TotalProducts, TotalPrice, TotalUnits } })
    },
    ProductDeleteCart(item) {
        const ProductFilter = get().ListAggregatedProducts
        const newproduct = ProductFilter.filter(products => products.id !== item.id)
        set({ ListAggregatedProducts: newproduct })
        get().CalculeTotal()
        get().SaveProduct()
    },
    FilterCategory(categoria) {
        const FilterProductCategoria = get().ListApiProduct.filter(product => product.category === categoria)
        if (FilterProductCategoria === undefined) {
            alert('categoria no existe!')
            return
        }
        set({ ListApiProduct: FilterProductCategoria })
    },
    CategorySave(DataApi) {
        const captured = DataApi.map(item => item.category)
        const NewListCategory = [...new Set(captured)]
        set({ CategoryList: NewListCategory })
    },

    /************************* */
    FecthData() {
        const url = 'https://fakestoreapi.com/products'
        fetch(url)
            .then(response => response.json())
            .then(result => {
                get().CategorySave(result)
                set({ ListApiProduct: result })
                console.log(get().ListApiProduct)
            })
    },
}))

export default useStore