import Item from '../../types'
import * as Styled from './style'
type Props<TInput> = {
    title: string,
    input: TInput,
    formula: <TResult>(input: TInput) => TResult
}

const SampleLine = <TInput, TFormulaResult,>({ title, input, formula }: Props<TInput>) => {

    const inputAsString: String = JSON.stringify(input, null, 2)
    const resultAsString: String = JSON.stringify(formula(input))
    const formulaAsString: String = String(formula)
        .replace(/ramda__WEBPACK_IMPORTED_MODULE_4__/g, '')
        .replace(/\[\"/g, '')
        .replace(/\"\]/g, '')

    return (
        <Styled.Container>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Formula>{formulaAsString}</Styled.Formula>
            <Styled.Input>{inputAsString}</Styled.Input>
            <Styled.Result>{resultAsString}</Styled.Result>
        </Styled.Container>
    )
}

export default SampleLine