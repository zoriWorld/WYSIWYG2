import React from 'react'
import styled from '@emotion/styled'

const App = function () {
    const bold = () => {
        const sel = window.getSelection()!
        let range = sel.getRangeAt(0)
        range.deleteContents()
        const el = document.createElement('div')
        el.innerHTML = '하이'

        const frag = document.createDocumentFragment()
        const node = el.firstChild!
        const lastNode = frag.appendChild(node)

        range.insertNode(frag)

        if (lastNode) {
            range = range.cloneRange()
            range.setStartAfter(lastNode)
            range.collapse(true)
            sel.removeAllRanges()
            sel.addRange(range)
        }
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
