const root: any = document.querySelector(":root");

function setRootValue(productsQuantity: number): void {
    root.style.setProperty('--products-quantity', productsQuantity);
}

export default setRootValue;