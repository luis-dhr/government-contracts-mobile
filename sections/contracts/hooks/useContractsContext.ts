import { ContractsContext } from '../context/ContractsContext'
import { useContext } from 'react'

export const useContractsContext = () => useContext(ContractsContext)
