import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';

function Graph() {
    return (
        <div className='graphs'>
            <div className="graph-container">
                <div className="graph">
                    <BarChart
                        xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                        series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                        width={280}
                        height={190}
                    />
                </div>
            </div>

            <div className="graph-container">
                <div className='graph'>
                    <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                        series={[
                            {
                                data: [2, 5.5, 2, 8.5, 1.5, 5],
                            },
                        ]}
                        width={280}
                        height={190}
                    />
                </div>
            </div>

            <div className="graph-container">
                <div className='graph'>
                    <PieChart
                        series={[
                            {
                                data: [
                                    { id: 0, value: 10, label: 'series A' },
                                    { id: 1, value: 15, label: 'series B' },
                                    { id: 2, value: 20, label: 'series C' },
                                ],
                            },
                        ]}
                        width={280}
                        height={190}
                    />
                </div>
            </div>
        </div>
    )
}

export default Graph