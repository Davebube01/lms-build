import { Search } from 'lucide-react'
import Form from 'next/form'

function SerachInput() {

return (
  <Form action="/search"
      className='relative w-full max-w-[300px] flex-1'
  >
      <input 
          type="text" 
          name="query"
          placeholder='Search courses'
          className='w-full rounded-full bg-secondary/80 px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary'
      />
      <Search className='absolute h-4 w-4 top-1/2 left-3 -translate-y-1/2 text-muted-foreground'/>
  </Form>
)
}

export default SerachInput
