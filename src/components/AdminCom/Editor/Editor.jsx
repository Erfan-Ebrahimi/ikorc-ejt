/* eslint-disable react/prop-types */
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "./Editor.scss"
const Editor = ({value , setValue}) => {
    return (
        <div className="app-2">
            <CKEditor
                
                editor={ClassicEditor}
                data={value}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setValue(data)
                }}
            />
        </div>
    )
}

export default Editor