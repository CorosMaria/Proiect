import './sidebar.css'
import ParametersTable from '../../components/Table/table'
import Grid from '@material-ui/core/Grid'

const SideBar: React.FC = () => (
  <div className="sidebar">
    <Grid container direction="column">
      <Grid item xs={12}>
        <ParametersTable />
      </Grid>
      <Grid item xs={12}>

      </Grid>
      <Grid item xs={12}>

      </Grid>
    </Grid>
  </div>
)
export default SideBar
