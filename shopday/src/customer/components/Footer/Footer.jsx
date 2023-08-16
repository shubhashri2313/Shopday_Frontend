import React from "react";
import { Grid, Typography , Button, Link} from "@mui/material"
//import { Button } from "react-bootstrap"


const Footer = () => {
    return(
        <div>
            <Grid className='bg-black text-white text-center mt-10'
             container
             sx={{bgcolor:"black",color:"white", py:3}} 
             >


                <Grid item xs={12} sm={6} md={3}> 
                  <Typography className='pb-5' variant='h6'>Company</Typography>
                  {/* Typography is a Material-UI component used to standardize the text and its related CSS properties without worrying about browser compatibility issues */}
                  {/* https://www.pluralsight.com/guides/how-to-add-a-custom-bsstyle-property-to-a-button-with-react  for variant just gp through this article  */}
                 <div>
                 <Button className='pb-5' variant='h6' gutterBottom>About</Button>
                 </div>
                 <div>
                 <Button className='pb-5' variant='h6' gutterBottom>Blog</Button>
                 </div>

                 <div>
                 <Button className='pb-5' variant='h6' gutterBottom>Press</Button>  
                 </div>

                 <div>
                  <Button className='pb-5' variant='h6' gutterBottom>Jobs</Button>
                 </div>

                 <div>
                 <Button className='pb-5' variant='h6' gutterBottom>Partners</Button> 
                 </div>
                 
                  
                </Grid>

                <Grid item xs={12} sm={6} md={3}> 
                  <Typography className='pb-5' variant='h6'>Solutions</Typography>
                 <div>
                 <Button className='pb-5' variant='h6' gutterBottom>Marketing</Button>
                 </div>
                 <div>
                 <Button className='pb-5' variant='h6' gutterBottom>Analytics</Button>
                 </div>

                 <div>
                 <Button className='pb-5' variant='h6' gutterBottom>Commerce</Button>  
                 </div>

                 <div>
                  <Button className='pb-5' variant='h6' gutterBottom>Insights</Button>
                 </div>

                 <div>
                 <Button className='pb-5' variant='h6' gutterBottom>Partners</Button> 
                 </div>
                 
                  
                </Grid>

                <Grid item xs={12} sm={6} md={3}> 
                  <Typography className='pb-5' variant='h6'>Documentation</Typography>
                 <div>
                 <Button className='pb-5' variant='h6' gutterBottom>Guides</Button>
                 </div>
                 <div>
                 <Button className='pb-5' variant='h6' gutterBottom>API Status</Button>
                 </div>
                  
                </Grid>

                <Grid item xs={12} sm={6} md={3}> 
                  <Typography className='pb-5' variant='h6'>Legal</Typography>
                 <div>
                 <Button className='pb-5' variant='h6' gutterBottom>Claim</Button>
                 </div>
                 <div>
                 <Button className='pb-5' variant='h6' gutterBottom>Privacy</Button>
                 </div>

                 <div>
                 <Button className='pb-5' variant='h6' gutterBottom>Terms</Button>  
                 </div>

                  
                </Grid> 
         
              <Grid className="pt-20" items xs={12}>
              <Typography  variant='body2' component="p" align="center">
              &copy;2023 Shopday.All Rights reserved.
              </Typography>

              <Typography  variant='body2' component="p" align="center">
               developer by Team Super 30. 
              </Typography>

              <Typography  variant='body2' component="p" align="center">
               Icons made by{' '}
               <Link href="https://www.freepik.com/" color="inherit" underline="always">
                 Freepik
               </Link>
               {' '} from{' '}
               <Link href="https://www.flaticon.com/" color="inherit" underline="always">
               www.flaticon.com
               </Link>

              </Typography>

              </Grid>
            </Grid>
        </div>
    )
}
export default Footer;