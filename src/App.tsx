import React from 'react'
import styled from '@emotion/styled'

const App = function () {
    const bold = () => {
        const selected = window.getSelection()!.getRangeAt(0)
        const node = document.createElement('b')
        node.innerHTML = selected as unknown as string
        selected.deleteContents()
        selected.insertNode(node)
    }
    return (
        <div id="Editor">
            <div>
                <button type="button" onClick={bold}>
                    bold
                </button>
                <InputArea contentEditable="true" />
            </div>
        </div>
    )
}

const InputArea = styled.div`
    padding: 5px;
    width: 300px;
    height: 300px;
    border: 1px solid #000;
`

export default App
