import ListItem from '@mui/material/ListItem'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { InputAdornment } from '@mui/material';
import { IconButton } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';

export default function TodoForm({ add }) {
  const [text, setText] = useState("");
  function handleChange(evt) {
    setText(evt.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if(text){
      add(text)
      setText("")
    }
    
  }
  return (
    <ListItem>
      <form onSubmit={handleSubmit} style={{width:'100%'}}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Add Todo"
          variant="outlined"
          value={text}
          onChange={handleChange}
          slotProps={{
            input: {
              endAdornment: <InputAdornment position="end">
                <IconButton
                  aria-label="A nice minimal Pencil Icon. Too bad You can't see though"
                  edge="end"
                  type="submit"
                >
                  <CreateIcon />
                </IconButton>
              </InputAdornment>
            }
          }}
        />
      </form>
    </ListItem>

  )
}

