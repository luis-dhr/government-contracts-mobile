import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from 'react-native-svg'
import { ColorValue } from 'react-native'

type BackIconProps = {
  colorFill?: ColorValue
  percentage?: string
}

export function BackIcon (
  { colorFill = '#333333', percentage = '35%', ...props }: SvgProps & BackIconProps
) {
  return (
    <Svg
      fill='none'
      height={percentage ?? '100%'}
      preserveAspectRatio='xMidYMid meet'
      viewBox='0 0 12 20'
      width={percentage ?? '100%'}
      {...props}
    >
      <G clipPath='url(#clip0_1128_5)'>
        <Path
          d='M8.97042 19.0952L8.9703 19.0953L8.9796 19.1041C9.24757 19.3587 9.59246 19.5 9.95656 19.5C10.3132 19.5 10.6744 19.3635 10.9427 19.0952C11.4855 18.5524 11.4855 17.6745 10.9427 17.1318L3.85659 10.0457L11.0318 2.87044C11.5746 2.3277 11.5746 1.4498 11.0318 0.907058C10.4891 0.364314 9.61117 0.364314 9.06842 0.907058L0.907058 9.06842C0.364314 9.61117 0.364314 10.4891 0.907058 11.0318L8.97042 19.0952Z'
          fill={colorFill ?? '#333333'}
          stroke={colorFill ?? '#333333'}
        />
      </G>
      <Defs>
        <ClipPath id='clip0_1128_5'>
          <Rect fill='white' height={20} width={12} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
