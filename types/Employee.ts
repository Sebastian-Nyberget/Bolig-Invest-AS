import { TypedObject } from '@portabletext/types'

interface Employee {
    name: string
    role: string
    imageUrl?: string 
    bio: Array<TypedObject> 
  }

export default Employee;