import React from 'react'

// components
import Heros from './Heros'
import Chart from './Chart'
import Table from './Table'

const Home = ({covidData}) => {
    return (
        <div className=''>
            <Heros/>

            <nav className='bg-zinc-800 pv-10  drop-shadow-lg text-white '>
                <h2 className='lg:text-4xl font-bold text-center md:text-2xl sm:text-xl py-10'>CORONAVIRUS PANDEMIC</h2>
            </nav>
            <article>

                <section className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 m-10 lg:gap-10 gap-5'>
                    <div className='bg-zinc-200 py-5  rounded'>
                        <h2 className='text-3xl font-bold text-center '>Coronavirus Cases:</h2>
                        <h3 className='text-3xl font-bold text-center text-yellow-600'>{covidData.cases}</h3>
                    </div>

                    <div className='bg-zinc-200 py-5 rounded'>
                        <h2 className='text-3xl font-bold text-center '>Deaths : </h2>
                        <h3 className='text-3xl font-bold text-center text-red-600'>{covidData.deaths}</h3>
                    </div>

                    <div className='bg-zinc-200 py-5 rounded'>
                        <h2 className='text-3xl font-bold text-center'>Recovered:</h2>
                        <h3 className='text-3xl font-bold text-center text-green-600'>{covidData.recovered}</h3>
                    </div>
                </section>
            </article>
            <Chart covidData = {covidData} />
            <Table/>
        </div>
    )
}

export default Home