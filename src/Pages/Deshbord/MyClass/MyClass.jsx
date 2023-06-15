import useCart from "../../../Hooks/useCart";


const MyClass = () => {
    const [cart] = useCart();
    //console.log(cart);
    const total = cart.reduce((sum, item) =>item.course_Free + sum,0)
    return (
        <div className="uppercase">
           
            <h3 className="text-3xl">Total Items:{cart.length}</h3>
            <h3 className="text-3xl">Total Price:${total}</h3>
            <button className="btn btn-warning btn-sm">Pay</button>
           
        </div>
    );
};

export default MyClass;