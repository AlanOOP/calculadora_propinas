import { TipOption } from "../types"

const tipOptions: TipOption[] = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

type TipPercentageFormProps = {
    tip: number
    setTip: React.Dispatch<React.SetStateAction<number>>
}



export const TipPercentageForm = ({ tip, setTip }: TipPercentageFormProps) => {

    return (
        <div>
            <h3 className="font-black text-2xl">
                Propina:
            </h3>

            <form
                className="space-y-3"
            >
                {
                    tipOptions.map((option) => (
                        <div
                            key={option.id}
                            className="flex items-center"
                        >
                            <label
                                htmlFor={option.id}
                            >
                                {option.label}
                            </label>
                            <input
                                type="radio"
                                id={option.id}
                                value={option.value}
                                name="tip"
                                className="mr-2"
                                onChange={(e) => setTip(+e.target.value)}
                                checked={tip === option.value}
                            />
                        </div>
                    ))
                }

            </form>
        </div>
    )
}
