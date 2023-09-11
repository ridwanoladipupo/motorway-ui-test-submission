# Motorway UI Test

## RIDWAN OLADIPUPO's SUBMISSION

### Note:

- I encountered CORS issue, so I enabled CORS on the server to allow requests from the origin where my react App is running.

- I reconfigured the server to use Port 4000 when other App is currently using my Port 5000

### For Performance Optimization

1. I added Pagination. With the pagination, the App will only fetch and render 10 images or a reasonable number of images at a time.

2. I implemented Skeleton to indicate the loading state when a call is made and the data is fetching. This would enhance the user experience and perceived performance.

For performance measurement,

1. Using

   - **Network Tab**: I will monitor the API response times, request and response sizes, and loading times for the images.
   - **Lighthouse**: I will run Lighthouse audits to measure performance, accessibility, SEO, and best practices.

2. I will do before-and-after testing by recording performance metrics (e.g., page load time, API response time) both before and after implementing optimizations. Compare the metrics to quantify the improvements.
