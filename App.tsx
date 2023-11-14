import { StatusBar } from 'expo-status-bar';
import { TabRoutes } from './src/routes/Routes';



export default function App() {
  return (
    <>
      <StatusBar
        style={"inverted"}
      />
      {/* <Wishlist />
      <Library /> */}
      <TabRoutes />
    </>
    
  )
};