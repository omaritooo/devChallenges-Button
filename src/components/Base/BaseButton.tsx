import { PropsWithChildren } from "react"

interface IButton {
    variant?: string,
    disableShadow?: boolean,
    disabled?: boolean,
    startIcon?: string,
    endIcon?: string,
    size?: string,
    color?: string,
}

export const BaseButton = ({variant, disableShadow, children, disabled, startIcon, endIcon, size, color}: PropsWithChildren<IButton>) => {

    const variants = {
        outline: 'bg-transparent outline outline-1 outline-button-outline text-button-outline focus:bg-button-hover-outline hover:bg-button-hover-outline ',
        text: 'bg-transparent text-button-outline bg-transparent hover:bg-button-hover-outline focus:bg-button-hover-outline disabled:!bg-transparent disabled:hover:bg-transparnet disabled:focus:bg-transparent'
    }
    const colors = {
        primary: ' bg-button-outline hover:bg-button-hover-primary text-white focus:bg-button-hover-primary',
        default: ' bg-button-default hover:bg-button-hover-default text-black focus:bg-button-hover-default',
        secondary: ' bg-button-secondary hover:bg-button-hover-secondary text-white focus:bg-button-hover-secondary',
        danger: ' bg-button-danger hover:bg-button-hover-danger text-white focus:bg-button-hover-danger'
    }
    const sizes = {
        lg: 'py-[11px] px-[22px]',
        md: 'py-4 px-4',
        sm: 'px-3 py-[6px]'
    }

    return <button disabled={disabled} className={`text-base transition duration-75 w-fit items-center flex gap-x-2 font-medium rounded-md 
    ${size ? sizes[size as keyof typeof sizes] : 'px-4 py-2'} ${disableShadow ? '' : 'drop-shadow-button'}
    ${disabled ? '!bg-button-disabled disabled:text-[#9E9E9E]': ''}  
    ${color ? colors[color as keyof typeof colors] : colors['default']} ${variants[variant as keyof typeof variants]}`}>
       {startIcon ? <span className="material-icons md-18">
            {startIcon}
       </span> : null}
      {children}
       {endIcon ? <span className="material-icons md-18">
            {endIcon}
       </span> : null}
    </button>   
}