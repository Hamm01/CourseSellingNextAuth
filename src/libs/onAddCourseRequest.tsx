import { CourseParams } from '@/types/zodTypes'
import axios from 'axios'
import toast from 'react-hot-toast'

export const AddCourseRequest = async (courseDetail: CourseParams) => {
  try {
    const response = await axios.post('api/user/addcourse', courseDetail)
    console.log(response.data)
    toast.success('Course Succesfully Created')
  } catch (error: any) {
    toast.error(error.message)
    console.log(error.message)
  }
}
