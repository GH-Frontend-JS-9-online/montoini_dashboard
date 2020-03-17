import React from 'react'
import './ConnectionChart.css'
import { ResponsiveContainer, AreaChart, Area } from 'recharts'

export const ConnectionChart: React.FC = () => {
    const days: Array<string> = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
    const data: Array<any> = [
        {
            uv: 3000
        },
        {
            uv: 6000
        },
        {
            uv: 4000
        },
        {
            uv: 5000
        },
        {
            uv: 3000,
        },
        {
            uv: 8000
        },
        {
            uv: 4000
        },
        {
            uv: 6000
        }
    ]
    return (
        <div className="chart" style={{ width: '100%', height: 400, background: '#2b2d3'}}>
            <ResponsiveContainer>
                <AreaChart data={data}>
                    <Area type="monotone" dataKey="uv" stroke="#2196f3" fill="#2a3850" />
                </AreaChart>
            </ResponsiveContainer>
            <ul className="chart__menu">
                {days.map((item, index) => {
                    return (
                        <li key={index} className="chart__item">{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}

