const apiURL = 'https://fakestoreapi.com/products';


export const getProducts = async () => {
    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error('No se pudieron obtener los productos');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error al obtener los productos: ${error.message}`);
    }
}

export const getProductById = async (idProduct) => {
    try {
        const response = await fetch(apiURL + `/${idProduct}`);
        if (!response.ok) {
            throw new Error('No se PUDO obtener el producto.');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error al obtener el producto: ${error.message}`);
    }
}

export const getProductsByCategory = async (category) => {
    try {
        const response = await fetch(apiURL + `/category/${category}`);
        if (!response.ok) {
            throw new Error('No se PUDO obtener los productos de esa categoria.');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error al obtener los productos de esa categoria: ${error.message}`);
    }
}

export const getProductByName = (nombre, productos) => {
    return productos.filter(producto => {
      const tituloMinuscula = producto.title.toLowerCase();
      const nombreMinuscula = nombre.toLowerCase();
      
      return tituloMinuscula.includes(nombreMinuscula);
    });
  };
