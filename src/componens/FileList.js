import React from 'react'
import { Paper } from '@material-ui/core'
import File from './File'

const FileList = () => {
    return (
        <Paper elevation={8} style={{padding:20}}>
            <File />
            <File />
            <File />
            <File />
            <File />
            <File />
        </Paper>
    )
}

export default FileList