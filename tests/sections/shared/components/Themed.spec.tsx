import Colors from '../../../../constants/Colors'
import renderer from 'react-test-renderer'
import { View } from '../../../../sections/shared/components'

// Tests that the component renders with the default background color when lightColor and darkColor are not provided
it('test_default_background_color', () => {
  const wrapper = renderer.create(<View />).toJSON()
  expect(wrapper).toHaveProperty('props.style', [{ backgroundColor: Colors.light.background }])
})

// Tests that the component renders with the lightColor prop when only lightColor is provided
it('test_light_color_prop', () => {
  const wrapper = renderer.create(<View lightColor='red' />).toJSON()

  expect(wrapper).toHaveProperty('props.style', [{ backgroundColor: 'red' }])
})

// Tests that the component renders with the darkColor prop when only darkColor is provided
// it('test_dark_color_prop', () => {
//   const wrapper = shallow(<View darkColor='blue' />)
//   expect(wrapper.prop('style')).toEqual([{ backgroundColor: 'blue' }])
// })

// Tests that the component renders with the color scheme based on the device settings when both lightColor and darkColor are provided
// it('test_device_color_scheme', () => {
//   useColorSchemeContext.mockReturnValueOnce({ colorScheme: 'light' })
//   const wrapper = shallow(<View lightColor='red' darkColor='blue' />)
//   expect(wrapper.prop('style')).toEqual([{ backgroundColor: 'red' }])

//   useColorSchemeContext.mockReturnValueOnce({ colorScheme: 'dark' })
//   const wrapper2 = shallow(<View lightColor='red' darkColor='blue' />)
//   expect(wrapper2.prop('style')).toEqual([{ backgroundColor: 'blue' }])
// })

// Tests that the component renders with the custom styles passed as props
// it('test_custom_styles', () => {
//   const wrapper = shallow(<View style={{ height: 100 }} />)
//   expect(wrapper.prop('style')).toEqual([{ backgroundColor: Colors.light.background }, { height: 100 }])
// })

// Tests that the component renders with the default background color when an invalid color name is provided
// it('test_invalid_color_name', () => {
//   const wrapper = shallow(<View lightColor='red' darkColor='blue' />)
//   expect(wrapper.prop('style')).toEqual([{ backgroundColor: Colors.light.background }])
// })
