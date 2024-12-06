interface SwitchProps {
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
    label?: string;
}

export default function Switch({ checked, onCheckedChange, label }: SwitchProps) {
    return (
        <div className="switchWrapper">
            <div onClick={() => onCheckedChange(!checked)} className={`switchContainer ${checked && 'checked'}`}>
                <div className={`switchThumb ${checked && 'checked'}`}>

                </div>
            </div>
            {label && <span>{label}</span>}
        </div>
    )
}