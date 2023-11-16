import { useState } from 'react'

export const useCalendar = (initialDate = new Date().toISOString()) => {
  const [selected, setSelected] = useState(initialDate)

  return {
    selected,
    setSelected,
  }
}
