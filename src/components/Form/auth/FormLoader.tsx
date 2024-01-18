function FormLoader(): JSX.Element {
    return (
        <div className="modal-loader absolute inset-0 z-20 rounded-2xl">
            <div className="flex items-center justify-center h-full">
                <span className="loader"></span>
            </div>
        </div>
    );
}

export default FormLoader;