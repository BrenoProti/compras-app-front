import { NextPage } from "next"

interface TextProps {
    txt: string;
}

const Text: React.FC<TextProps> = (props: TextProps) => {
    return (
        <h1>{props.txt}</h1>
    )
}

const MeuComponent = () => {
    return (
        <div>
            <Text txt="Olá, mundo! (Props)"></Text>
        </div>
    )
}

export default MeuComponent