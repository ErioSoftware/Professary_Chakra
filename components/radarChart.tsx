import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts'
import { useTheme } from 'next-themes'
import { FC } from 'react'
import { SuperpowerRadarChartData } from '@/types/dashboard'
import { BaseAxisProps } from 'recharts/types/util/types'

interface IProps {
	data: SuperpowerRadarChartData
}

const TickStyle: BaseAxisProps['tick'] = {
	fontSize: '10px',
	letterSpacing: '0.5px',
	fontWeight: '500',
	fill: '#6E7191'
}

const RadarChartComponent: FC<IProps> = ({ data }) => {
	const { resolvedTheme } = useTheme()

	return (
		<ResponsiveContainer>
			<RadarChart outerRadius='75%' data={data}>
				<PolarGrid />
				<PolarAngleAxis dataKey='subject' tick={TickStyle} />
				<Radar
					dataKey='value'
					strokeWidth={3}
					isAnimationActive={false}
					stroke={resolvedTheme === 'dark' ? 'rgb(169, 150, 255)' : 'rgb(95, 46, 234)'}
					fill={resolvedTheme === 'dark' ? '#A996FF' : 'rgb(95, 46, 234)'}
					fillOpacity={0.2}
				/>
			</RadarChart>
		</ResponsiveContainer>
	)
}

export default RadarChartComponent