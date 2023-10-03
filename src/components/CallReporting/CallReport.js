import React, { useEffect } from 'react'

import '../CallReporting/CallReport.css'

import Chart from "react-apexcharts";

import { useDownloadExcel } from 'react-export-table-to-excel';

import { useState, useRef } from "react";

import axios from 'axios';

import Navbar from '../Navbar/Navbar';

import Sidebar from '../Sidebar/Sidebar';

function CallReport() {

    
    // Chart Data From Json

    // const [chartData, setChartData] = useState([])

    //  const getChartData = async () => {
    //     try {
    //         const chartDataUrl = await axios.get("http://localhost:3000/chartData.json")
    //         const jsonData = chartDataUrl.data.chartData;
            
    //         console.log(jsonData)

    //         setChartData(jsonData)

    //     } catch (error) {
    //         console.log(error)
    //     }
    //  }

    //  useEffect(() => {
    //     getChartData()
    //  }, [])


    useEffect(() => {
        const data = [];
        const category = [];
        const death = []

        axios.get("http://localhost:3000/chartData.json").then(response => {
            // console.log("response" , response);
            const jsonData = response.data.chartData;
            jsonData.map(item =>  {
                data.push(item.Data);
                category.push(item.Category);
                death.push(item.Death)

            })

            setState({
                options: {
                    colors: ["rgb(6, 125, 52)", "orangered"],
                    chart: {
                        id: "basic-bar"
                    },
                    xaxis: {
                        categories: category
                    },
                    zoom: {
                        enabled: true
                      }
                },
                series: [
                    {
                        name: "Born",
                        data: data
                    },
                    {
                        name: "Death",
                        data: death
                    },
                ]
            })
            
        }).catch(e => {
            console.log(e)
        })
    },[])



    // -------------------------

    // Chart Js Import
    const [state, setState] = useState({
        options: {
            colors: ["#E91E63", "#FF9800"],
            chart: {
                id: "basic-bar"
            },
            
            xaxis: {
                categories: []
            }
        },
        series: [
            {
                name: "People Born",
                data: []
            },
            {
                name: "People Death",
                data: []
            }
        ]
    })

    // -------------------


    // Downloade Table to Excel

    const tableRef = useRef(null)

    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: "Dashboard Data",
        sheet: "LevelUp"
    });
    // -------------------------

    // Table Data From Json

    const [product, setProduct] = useState([])

    const getProductData = async () => {
        try {
            const data = await axios.get("http://localhost:3000/TData.json")
            setProduct(data.data.recentProjects)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProductData()
    }, [])

    // -------------------------

     

    return (
        <>

            <Navbar />

            <Sidebar />

            <div className="container_dashboard">
                <div className="content_left">
                    <div className="recent-grid">
                        <div className="projects">
                            <div className="card">

                                <div className="card-header">
                                    <h3>Recent Projects</h3>
                                    <button onClick={onDownload}>Export Data to Excel</button>
                                </div>

                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table ref={tableRef}>
                                            <thead>
                                                <tr>
                                                    <td>Project Title</td>
                                                    <td>Department</td>
                                                    <td>Status</td>
                                                </tr>
                                            </thead>

                                            {product.map(item => {
                                                return (
                                                    <tbody>
                                                        <tr>
                                                            <td>{item.Title}</td>
                                                            <td>{item.Department}</td>
                                                            <td>
                                                                <span className='status orange'></span>
                                                                {item.Status}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                )
                                            })}

                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="content_right">
                    <div className="chart_content">
                        <Chart className="bar_chart"
                            options={state.options}
                            series={state.series}
                            type="area"
                            width="500"
                            padding="20"
                            min="0"
                            max="5"
                            overflow-x= "auto"
                        />
                    </div>
                </div>

            </div>

        </>
    )
}

export default CallReport