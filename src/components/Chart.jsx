import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const Chart = ({covidData}) => {
  const data = [
    { name: 'Cases', uv: covidData.cases, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: covidData.cases, pv: 2400, amt: 2400 },
    { name: 'Page C', uv: covidData.cases, pv: 2400, amt: 2400 },
  ];
  return (
    <div className='text-center text-4xl font-bold'>
      <h2 className='mb-10'>Bar Chart</h2>
      <div>
        <BarChart width={1200} height={300} data={data} className='mx-auto' >
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
          <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="uv" fill="red" barSize={10} />
        </BarChart>
      </div>
    </div>
  )
}

export default Chart