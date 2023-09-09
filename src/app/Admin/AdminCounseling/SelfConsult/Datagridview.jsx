import DataTable from 'react-data-table-component';
import { Media } from 'react-data-table-component';

const DataGridView = ({ tableData, setClickedID, setOpenINfo }) => {
    const columns = [
        {
            name: <div className='flex text-center'>TICKET NO.</div>,
            selector: row => row.ticket,
            sortable: true,
            cell: (row) => <div onClick={() => handleRowClick(row)} style={{ whiteSpace: 'normal' }}>{row.ticket}</div>,
            hide: Media.SM
        },
        {
            name: <div className='flex text-center'>REASON</div>,
            selector: row => row.reason,
            sortable: true,
            cell: (row) => <div style={{ whiteSpace: 'normal' }}>{row.reason}</div>,
            hide: Media.SM
        },
        {
            name: <div className='flex text-center'>REQUESTED DATE OF APPOINMENT</div>,
            selector: row => row.date,
            sortable: true,
            cell: (row) => <div style={{ whiteSpace: 'normal' }}>{row.date}</div>,
        },
        {
            name: <div className='flex text-center'>TYPE OF CONSULTATION</div>,
            selector: row => row.type,
            sortable: true,
            cell: (row) => <div style={{ whiteSpace: 'normal' }}>{row.type}</div>,
            hide: Media.SM
        },
        {
            name: <div className='flex text-center'>STATUS</div>,
            selector: row => row.status,
            sortable: true,
            cell: (row) => <div style={{ whiteSpace: 'normal' }}>{row.status}</div>,
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
    const data = Object.values(tableData).map((consultSelf, index) => ({
        id: index,
        ticket: consultSelf.id,
        reason: consultSelf.consultationReason,
        date: consultSelf.appointmentDate,
        type: consultSelf.consultationType,
        status: consultSelf.status,
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
            pagination
        />

    );
}

export default DataGridView;