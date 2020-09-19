import React, { useState } from 'react'
import _ from 'lodash'
import { makeStyles } from '@material-ui/core/styles'
import Autocomplete from '@material-ui/lab/Autocomplete'
import {
  CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon,
  CheckBox as CheckBoxIcon,
} from '@material-ui/icons'
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  TextField,
  FormGroup,
} from '@material-ui/core'
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons'
import AutocompleteCheckbox from 'components/sitemap_page/components/autocomplete'

function Seach(props) {
  const classes = useStyles()
  const [citys, setcitys] = useState([{ id: 1, name: 'Thanh pho Da Nang' }])
  const [districts, setdistricts] = useState([
    { id: 1, name: 'Quan Hai Chau' },
    { id: 2, name: 'Quan Cam Le' },
    { id: 3, name: 'Quan Ngu Hanh Son' },
  ])
  const [communes, setcommunes] = useState([
    { id: 1, name: 'Phuong Abc' },
    { id: 2, name: 'Phuong Bac My An' },
  ])
  const [streets, setstreets] = useState([
    { id: 1, name: 'Nam Ky khoi nghia' },
    { id: 2, name: 'Nui Thanh' },
  ])
  console.log('props in search', props);
  
  return (
    <div className={classes.formSearch}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>TÌM KIẾM NÂNG CAO</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <form className={classes.form} noValidate autoComplete="off">
            <FormGroup className={classes.formGroup}>
              <TextField
                label="Nhập từ khóa tìm kiếm"
                type="search"
                variant="outlined"
                size="small"
                InputProps={{
                  classes: {
                    input: classes.input,
                  },
                }}
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                  },
                }}
              />
            </FormGroup>
            {/* {
              props.provinceOption ? <AutocompleteCheckbox option={props.provinceOption} label="Tỉnh/Thành phố" /> : null 
            }
            
            <AutocompleteCheckbox option={districts} name="Quận/Huyện"  />
            <AutocompleteCheckbox option={communes} name="Phường/Xã" /> */}
            <AutocompleteCheckbox />
          </form>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}

export default Seach

const useStyles = makeStyles((theme) => ({
  formSearch: {
    padding: 10,
  },
  heading: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  form: {
    width: '100%',
  },
  input: {
    fontSize: 16,
  },
  formGroup: {
    marginBottom: 16,
  },
  labelRoot: {
    fontSize: 15,
  },
}))
