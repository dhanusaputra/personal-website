import React from 'react'
import { withTranslation } from 'react-i18next/hooks'
import { useSelector } from 'react-redux'
import i18n from '../i18n'

const Content = ({ t }) => {
  const langs = useSelector(state => state)
  langs.forEach(lang => {
    i18n.addResources(lang.id, 'translation', JSON.parse(lang.description))
  })

  return (
    <div>
      {t('something')}
    </div>
  )
}

export default withTranslation()(Content)
