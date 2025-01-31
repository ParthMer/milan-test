import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import {useState} from 'react'
import {Button} from '@mui/material'

const Test = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [teamName, setTeamName] = useState(null)
  const [selectedAmount, setSelectedAmount] = useState(0)
  const [indiaData, setIndiaData] = useState([])
  const [englandData, setEnglandData] = useState([])
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
    setTeamName(null)
  }

  const addEntry = () => {
    if (teamName === 'India') {
      setIndiaData([
        ...indiaData,
        {name: 'India', point: '1.5', amount: selectedAmount},
      ])
    } else {
      setEnglandData([
        ...englandData,
        {name: 'England', point: '2.5', amount: selectedAmount},
      ])
    }
    handleClose()
  }
  console.log({anchorEl})
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <Card
          onClick={e => {
            handleClick(e)
            setTeamName('India')
          }}
        >
          <CardActionArea
            // onClick={() => setSelectedCard(index)}
            // data-active={selectedCard === index ? '' : undefined}
            sx={{
              height: '100%',
              '&[data-active]': {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent sx={{height: '100%'}}>
              <Typography variant="h5" component="div">
                India
              </Typography>
              <Typography variant="body2" color="text.secondary">
                1.5
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          onClick={e => {
            handleClick(e)
            setTeamName('England')
          }}
        >
          <CardActionArea
            // onClick={() => setSelectedCard(index)}
            // data-active={selectedCard === index ? '' : undefined}
            sx={{
              height: '100%',
              '&[data-active]': {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent sx={{height: '100%'}}>
              <Typography variant="h5" component="div">
                England
              </Typography>
              <Typography variant="body2" color="text.secondary">
                2.5
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '50px',
        }}
      >
        <table>
          <tr>
            <th>Team name</th>
            <th>point</th>
            <th>Winning amount</th>
          </tr>
          {indiaData.map(data => {
            return (
              <tr>
                <td
                  style={{
                    border: '1px solid black',
                    textAlign: 'left',
                    padding: '8px',
                  }}
                >
                  {data.name}
                </td>
                <td
                  style={{
                    border: '1px solid black',
                    textAlign: 'left',
                    padding: '8px',
                  }}
                >
                  {data.point}
                </td>
                <td
                  style={{
                    border: '1px solid black',
                    textAlign: 'left',
                    padding: '8px',
                  }}
                >
                  {data.amount}$
                </td>
                <td
                  style={{
                    border: '1px solid black',
                    textAlign: 'left',
                    padding: '8px',
                  }}
                >
                  {data.amount * data.point}$
                </td>
              </tr>
            )
          })}
        </table>

        <table>
          <tr>
            <th>Name</th>
            <th>point</th>
            <th>amount</th>
            <th>Winning amount</th>
          </tr>
          {englandData.map(data => {
            return (
              <tr>
                <td
                  style={{
                    border: '1px solid black',
                    textAlign: 'left',
                    padding: '8px',
                  }}
                >
                  {data.name}
                </td>
                <td
                  style={{
                    border: '1px solid black',
                    textAlign: 'left',
                    padding: '8px',
                  }}
                >
                  {data.point}
                </td>
                <td
                  style={{
                    border: '1px solid black',
                    textAlign: 'left',
                    padding: '8px',
                  }}
                >
                  {data.amount}$
                </td>
                <td
                  style={{
                    border: '1px solid black',
                    textAlign: 'left',
                    padding: '8px',
                  }}
                >
                  {data.amount * data.point}$
                </td>
              </tr>
            )
          })}
        </table>
      </div>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Box
          sx={{
            width: '500px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            p: 3,
          }}
        >
          <Box sx={{display: 'flex'}}>
            <Typography variant="h6" component="div">
              {selectedAmount}$
            </Typography>
            <Button onClick={addEntry}>Submit</Button>
          </Box>
          <table>
            <tr>
              <td
                style={{
                  border: '1px solid black',
                  textAlign: 'left',
                  padding: '8px',
                }}
                onClick={() => setSelectedAmount(1000)}
              >
                1000
              </td>
              <td
                style={{
                  border: '1px solid black',
                  textAlign: 'left',
                  padding: '8px',
                }}
                onClick={() => setSelectedAmount(2000)}
              >
                2000
              </td>
              <td
                style={{
                  border: '1px solid black',
                  textAlign: 'left',
                  padding: '8px',
                }}
                onClick={() => setSelectedAmount(3000)}
              >
                3000
              </td>
            </tr>
            <tr>
              <td
                style={{
                  border: '1px solid black',
                  textAlign: 'left',
                  padding: '8px',
                }}
                onClick={() => setSelectedAmount(4000)}
              >
                4000
              </td>
              <td
                style={{
                  border: '1px solid black',
                  textAlign: 'left',
                  padding: '8px',
                }}
                onClick={() => setSelectedAmount(5000)}
              >
                5000
              </td>
              <td
                style={{
                  border: '1px solid black',
                  textAlign: 'left',
                  padding: '8px',
                }}
                onClick={() => setSelectedAmount(6000)}
              >
                6000
              </td>
            </tr>
          </table>
        </Box>
      </Menu>
    </div>
  )
}

export default Test
