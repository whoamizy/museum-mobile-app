import { type SectionListData } from 'react-native'

export interface Collection {
  _id: string
  imageId: string
  name: string
  author: string
  year: string
  collectionName: {
    _id: string
    name: string
  }
}

export interface CollectionItem {
  title: string
  data: Collection[]
}

export type SectionHeaderType = (info: {
  section: SectionListData<Collection, CollectionItem>
}) => React.ReactElement
