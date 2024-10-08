import { useState } from "react";
import Modal from "@/components/ui/modal";
import cx from "@/libs/cx";

interface Props {
  onClick: () => void;
  options?: {
    name: string;
  }[];
  toggle?: boolean;
}

const ModalNavbar = ({
  onClick,
  options,
  ...toggle
}: Props) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Modal {...toggle}>
      <div
        className={cx(
          "modal-navbar w-full h-full bg-primary",
          "flex flex-col",
          isVisible ? "" : "fade-out"
        )}
      >
        <div className="h-[56px] py-4 flex items-center justify-center">
          
          <button
            className="text-white absolute right-[5%] text-[24px] scale-x-[1.2]"
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => {
                onClick();
              }, 300);
            }}
          >
            X
          </button>
        </div>
        <ul className="flex flex-col text-white my-0 sm:my-[.5rem]">
          {options &&
            options.map((opt, i) => (
              <li
                key={i}
                className="font-normal text-lg sm:text-xl hover:bg-quaternary hover:brightness-125 duration-300 cursor-pointer"
              >
                <a
                  href={"#" + opt.name.toLowerCase()}
                  className="flex h-full py-[1rem] px-[2rem]"
                  onClick={() => {
                    setIsVisible(false);
                    setTimeout(() => {
                      onClick();
                    }, 300);
                  }}
                >
                  {opt.name}
                </a>
              </li>
            ))}
        </ul>       
      </div>
    </Modal>
  );
};

export default ModalNavbar;