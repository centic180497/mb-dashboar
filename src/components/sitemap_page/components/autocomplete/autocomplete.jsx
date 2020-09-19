import React, { useState } from 'react'
import _ from 'lodash'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, FormGroup, Checkbox } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import {
  CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon,
  CheckBox as CheckBoxIcon,
} from '@material-ui/icons'

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
const checkedIcon = <CheckBoxIcon fontSize="small" />
function AutocompleteCheckbox(props) {
  const classes = useStyles()
  const { options } = props

  //const { province_list, groups, district_list, commune_list } = options

  const onChange = (name, e, value) => {
    // console.log(province_list);
    if (value === null) {
      props.clearProvince()
    } else {
      props.changeSearchCamParams(value)
      const id = value.map((item) => item.value)
      // props.changeSearchCamParams(value)
      if (name === 'province_list') {
        const politicalPro = {
          ...props.political,
          province_list: value,
        }

        props.district(Number(id))
        props.isSeachcam(politicalPro)
      }
      if (name === 'district_list') {
        const politicalDis = {
          ...props.political,
          district_list: value,
        }

        props.communes(Number(id))
        props.isSeachcam(politicalDis)
      }
      if (name === 'communes') {
        const communes = {
          ...props.political,
          commune_list: value,
        }
       
        props.isSeachcam(communes)
        console.log('props political', communes)
      }

      // props.isSeachcam(props.political)
    }
  }

  return (
    <React.Fragment>
      {
        <FormGroup className={classes.formGroup}>
          <Autocomplete
            multiple
            size="small"
            options={
              options.province_list.length > 0 ? options.province_list : []
            }
            getOptionLabel={(option) => option.label}
            noOptionsText={'Không có lựa chọn'}
            // disableCloseOnSelect
            value={props.searchCam}
            renderOption={(option, { selected }) => (
              <React.Fragment>
                <Checkbox
                  icon={icon}
                  size="small"
                  checkedIcon={checkedIcon}
                  className={classes.checkBox}
                  checked={selected}
                  color="primary"
                />
                {option.label}
              </React.Fragment>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Tỉnh/Thành phố"
                variant="outlined"
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                  },
                }}
              />
            )}
            onChange={(e, value) => onChange('province_list', e, value)}
          />
        </FormGroup>
      }
      {
        <FormGroup className={classes.formGroup}>
          <Autocomplete
            multiple
            size="small"
            options={
              options.district_list.length > 0 ? options.district_list : []
            }
            getOptionLabel={(option) => option.label}
            noOptionsText={'Không có lựa chọn'}
            // disableCloseOnSelect
            value={props.searchCam}
            renderOption={(option, { selected }) => (
              <React.Fragment>
                <Checkbox
                  icon={icon}
                  size="small"
                  checkedIcon={checkedIcon}
                  className={classes.checkBox}
                  checked={selected}
                  color="primary"
                />
                {option.label}
              </React.Fragment>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Quận/Huyện"
                variant="outlined"
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                  },
                }}
              />
            )}
            onChange={(e, value) => onChange('district_list', e, value)}
          />
        </FormGroup>
      }
      {
        <FormGroup className={classes.formGroup}>
          <Autocomplete
            multiple
            size="small"
            options={
              options.commune_list.length > 0 ? options.commune_list : []
            }
            getOptionLabel={(option) => option.label}
            noOptionsText={'Không có lựa chọn'}
            // disableCloseOnSelect
            value={props.searchCam}
            renderOption={(option, { selected }) => (
              <React.Fragment>
                <Checkbox
                  icon={icon}
                  size="small"
                  checkedIcon={checkedIcon}
                  className={classes.checkBox}
                  checked={selected}
                  color="primary"
                />
                {option.label}
              </React.Fragment>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Phường/Xã"
                variant="outlined"
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                  },
                }}
              />
            )}
            onChange={(e, value) => onChange('communes', e, value)}
          />
        </FormGroup>
      }
      {
        <FormGroup className={classes.formGroup}>
          <Autocomplete
            multiple
            size="small"
            options={options.groups.length > 0 ? options.groups : []}
            getOptionLabel={(option) => option.label}
            noOptionsText={'Không có lựa chọn'}
            // disableCloseOnSelect
            value={props.searchCam}
            renderOption={(option, { selected }) => (
              <React.Fragment>
                <Checkbox
                  icon={icon}
                  size="small"
                  checkedIcon={checkedIcon}
                  className={classes.checkBox}
                  checked={selected}
                  color="primary"
                />
                {option.label}
              </React.Fragment>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Nhóm"
                variant="outlined"
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                  },
                }}
              />
            )}
            onChange={(e, value) => onChange('groups', e, value)}
          />
        </FormGroup>
      }
    </React.Fragment>
  )
}

export default AutocompleteCheckbox

const useStyles = makeStyles((theme) => ({
  formGroup: {
    marginBottom: 16,
  },
  labelRoot: {
    fontSize: 15,
  },
  checkBox: {
    marginRight: 8,
    padding: 4,
  },
}))
