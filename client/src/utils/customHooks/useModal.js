import { useState } from 'react'
import { setStyle, removeStyle } from '../usefulFunctions'

const useModal = () => {
  const [visible, setVisible] = useState({
    delete: false,
    update: false,
    addNewFriend: false,
  })
  // can pass in some kind of data to use in modal
  const [value, setValue] = useState({
    delete: null,
    update: null,
    addNewFriend: null,
  })
  const showHideModal = (key, bool, e) => {
    bool
      ? setStyle('root', {
          filter: 'blur(5px)',
          'pointer-events': 'none',
          position: 'fixed',
        })
      : removeStyle('root', ['filter', 'pointer-events', 'position'])
    setVisible({
      ...visible,
      [key]: bool,
    })
    e
      ? setValue({
          ...value,
          [key]: e.target.value,
        })
      : setValue({
          ...value,
          [key]: null,
        })
  }
  return {
    visible,
    showHideModal,
    value,
  }
}

export default useModal
