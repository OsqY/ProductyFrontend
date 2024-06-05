import { Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const TodosTable = () => {
  const router = useRouter();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {

      const response = await fetch('/api/todo')
      const data = await response.json();

      let i = 1;
      const mapedData = data.data.map(todo => ({
        id: i++,
        todoName: todo.name,
        startTime: todo.startTime,
        deadLine: todo.deadLine,
        isCompleted: todo.isCompleted,
        todoId: todo.id,
      }))
      data.data.map(todo => console.log(todo.name))
      setRows(mapedData)
    };
    fetchTodos();
  }, [])

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'todoName', headerName: 'Name', width: 150 },

    { field: 'startTime', headerName: 'Start Time', width: 150 },
    { field: 'deadLine', headerName: 'Deadline', width: 150 },
    { field: 'isCompleted', headerName: 'Completed?', width: 150 },
    {
      field: 'update',
      headerName: 'Update',
      width: 150,
      renderCell: (params) => (
        <Button
          color="primary"
          variant="text"
          size="small"
          onClick={() => handleUpdateClick(params.row.todoId)}
        >
          Update
        </Button>
      )

    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 150,
      renderCell: (params) => (
        <Button
          color="primary"
          variant="text"
          size="small"
          onClick={() => handleDeleteClick(params.row.todoId)}
        >
          Delete
        </Button>
      )
    },
  ]

  const handleUpdateClick = async (id) => {
    router.push(`/user/todos/update/${id}`)
  }


  const handleDeleteClick = async (id) => {
    if (confirm('Are you sure you want to delete this todo?')) {
      try {
        console.log("From handle", id)
        const response = await fetch('/api/todo', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: id
        });


        if (!response.ok) {
          console.error('Failed to delete todo:', response.statusText);
          return;
        }

        setRows((prevRows) => prevRows.filter((row) => row.todoId !== id));
      } catch (error) {
        console.error('Error deleting todo:', error);
      }
    }
  };

  return (
    <div style={{ height: 600, marginTop: 20, width: '80%' }}>
      <DataGrid rows={rows} columns={columns} >

      </DataGrid>
    </div >

  )
}

export default TodosTable;
