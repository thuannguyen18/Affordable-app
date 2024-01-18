import { MdClose } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "src/redux/formSlice";
import type { RootState } from "src/redux/store";
import istockphoto from "src/assets/images/istockphoto.png";
import FormAuthen from "src/components/form/auth";
import "./Header.css";

function HeaderAuthPopup(): JSX.Element {
    // Using redux
    const { isOpen } = useSelector((state: RootState) => state.authentication);
    const dispatch = useDispatch();
    // Check is form openning
    if (!isOpen) return <span></span>;
    return (
        <div className="header-auth-modal bg-modal fixed inset-0 z-20">
            <div className="modal-content">
                {/*  HEADER FORM AUTHENTICATION */}
                <div className="w-full rounded-3xl bg-white flex relative">
                    {/* LEFT SIDE FORM */}
                    <FormAuthen />

                    {/* RIGHT SIDE FORM */}
                    <div className="flex-1 bg-blue-100 rounded-r-3xl flex flex-col justify-center items-center">
                        <img src={istockphoto} alt="side-image" className="w-[230px] h-[230px]" />
                        <p className="text-blue-400 font-semibold">Everything is Affordable</p>
                        <p className="text-blue-400 text-sm">Sign in to checkout</p>
                    </div>

                    {/* CLOSE BUTTON */}
                    <button
                        className="modal-close-btn flex items-center justify-center shadow-xl"
                        onClick={() => dispatch(toggle())}
                    >
                        <MdClose className="text-3xl text-tx-2" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HeaderAuthPopup;