import DataTable from 'react-data-table-component';

const DataGridView = ({ tableData, setClickedID, setOpenINfo }) => {
    const columns = [
        {
            name: <div className='flex text-center'>TICKET NO.</div>,
            selector: row => row.ticket,
            sortable: true,
            cell: (row) => <div onClick={() => handleRowClick(row)} style={{ whiteSpace: 'normal', textAlign: 'center' }}>{row.ticket}</div>,
        },
        {
            name: <div className='flex text-center'>ACTION OF INDISCIPLINE</div>,
            selector: row => row.action,
            sortable: true,
            cell: (row) => <div style={{ whiteSpace: 'normal', textAlign: 'center' }}>{row.action}</div>,
        },
        {
            name: <div className='flex text-center'>DATE OF INCIDENT &#40;MM/DD/YYYY&#41;</div>,
            selector: row => row.date,
            sortable: true,
            cell: (row) => <div style={{ whiteSpace: 'normal', textAlign: 'center' }}>{row.date}</div>,
        },
        {
            name: <div className='flex text-center'>RATE OF OCCURENCE</div>,
            selector: row => row.rate,
            sortable: true,
            cell: (row) => <div style={{ whiteSpace: 'normal', textAlign: 'center' }}>{row.rate}</div>,
        },
        {
            name: <div className='flex text-center'>STATUS</div>,
            selector: row => row.status,
            sortable: true,
            cell: (row) => <div style={{ whiteSpace: 'normal', textAlign: 'center' }}>{row.status}</div>,
            conditionalCellStyles: [
                {
                    when: (row) => row.status === "Pending",
                    style: {
                        color: 'red',
                    },
                },
                {
                    when: (row) => row.status === "Cleared",
                    style: {
                        color: 'green',
                    },
                },
            ],
        },
    ];
    const data = Object.values(tableData).map((reports, index) => ({
        id: index,
        ticket: reports.id,
        action: reports.actionOfDiscipline,
        date: reports.dateOfIncident,
        rate: reports.rateOfOccurence,
        status: reports.status,
    }))

    const handleRowClick = (row) => {
        setClickedID(row.ticket)
        setOpenINfo(true)
    };

    const customStyles = {
        rows: {
            style: {
                cursor: 'pointer',
            },
        },
        headCells: {
            style: {
                backgroundColor: "#99acff",
            },
        },
    };

    return (
        <DataTable
            fixedHeader
            fixedHeaderScrollHeight="500px"
            customStyles={customStyles}
            onRowClicked={handleRowClick}
            columns={columns}
            data={data}
            pagination={tableData.length > 10}
            responsive
        />

    );
}

export default DataGridView;