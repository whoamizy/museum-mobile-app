/* eslint-disable prettier/prettier */
import React, {
  type PropsWithChildren,
  useCallback,
  useRef,
  useState,
} from 'react'
import {
  FlatList,
  type FlatListProps,
  type ListRenderItem,
  StyleSheet,
  TouchableOpacity,
  View,
  type ViewabilityConfig,
} from 'react-native'
import { type NativeViewGestureHandlerProps } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated'
import styled from 'styled-components/native'

import { useTickets } from 'src/context'
import { ArrowIcon } from 'src/icons'
import { MONTHS } from 'src/utils'

import {
  DATA,
  ESTIMATED_ROW_HEIGHT,
  SIZE,
  START_MONTH,
  thisMonth,
} from './constants'
import { Day } from './day'
import { type InfoItem, type Item, type ViewableInfo } from './types'
import { WeekRow } from './week-row'

const Top = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-horizontal: 20px;
  margin-bottom: 16px;
`

const MonthText = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.font.montserrat600};
  color: ${({ theme }) => theme.red_dark};
  text-align: center;
`

const ItemWrapper = styled.View`
  margin-vertical: 4px;
`

const ReanimatedFlatList =
  Animated.createAnimatedComponent<
    PropsWithChildren<
      FlatListProps<Item> &
      React.RefAttributes<FlatList<Item>> &
      NativeViewGestureHandlerProps
    >
  >(FlatList)

const viewabilityConfig: ViewabilityConfig = {
  minimumViewTime: 0,
  itemVisiblePercentThreshold: 40,
}

export const Month = () => {
  const [currentMonth, setCurrentMonth] = useState(START_MONTH)
  const [daysCount, setDaysCount] = useState(thisMonth.length)
  const { selected, selectDate } = useTickets()

  const listRef = useRef<FlatList>(null)

  const currentMonthText = MONTHS[currentMonth]

  const onViewableItemsChanged = useCallback((info: ViewableInfo) => {
    const item = info?.viewableItems?.[0]
    const month = item?.item?.month
    setDaysCount(item?.item.data.length)
    const usefullMonth = month === 12 ? 0 : month
    setCurrentMonth(usefullMonth)
  }, [])

  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ])

  const renderItem: ListRenderItem<InfoItem> = useCallback(
    ({ item }) => (
      <ItemWrapper>
        <Day
          date={item.date}
          day={item.day}
          selected={selected === item.date}
          setSelected={selectDate}
        />
      </ItemWrapper>
    ),
    [selectDate, selected],
  )

  const renderMonth: ListRenderItem<Item> = useCallback(
    ({ item }) => (
      <FlatList
        style={{ width: SIZE }}
        keyExtractor={(_, index) => index.toString()}
        numColumns={7}
        columnWrapperStyle={styles.column}
        data={item.data}
        renderItem={renderItem}
      />
    ),
    [renderItem],
  )

  const derivedHeight = useDerivedValue(
    () => ESTIMATED_ROW_HEIGHT * (daysCount / 7),
  )

  const animatedStyle = useAnimatedStyle(() => ({
    height: withTiming(derivedHeight.value, { duration: 150 }),
  }))

  const handlePressLeft = useCallback(() => {
    listRef.current?.scrollToIndex({ index: 0, animated: true })
  }, [])

  const handlePressRight = useCallback(() => {
    listRef.current?.scrollToIndex({ index: 1, animated: true })
  }, [])

  return (
    <View>
      <Top>
        <TouchableOpacity
          disabled={currentMonth === START_MONTH}
          onPress={handlePressLeft}>
          <ArrowIcon />
        </TouchableOpacity>
        <MonthText>{currentMonthText}</MonthText>
        <TouchableOpacity
          disabled={currentMonth === START_MONTH + 1}
          onPress={handlePressRight}>
          <ArrowIcon transform={[{ rotate: '180deg' }]} />
        </TouchableOpacity>
      </Top>
      <WeekRow />
      <ReanimatedFlatList
        ref={listRef}
        pagingEnabled
        horizontal
        data={DATA}
        renderItem={renderMonth}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        keyExtractor={(_, index) => index.toString()}
        style={animatedStyle}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  column: {
    justifyContent: 'space-between',
  },
})
