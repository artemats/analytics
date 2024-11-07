'use client'

import { useCallback } from 'react'
import { Eraser, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { getAPI } from '@/utils/fetching/getAPI'
import { useParams } from 'next/navigation'
// import { BlobProvider } from '@react-pdf/renderer'
// import AnalyticsPDF from '@/components/AnalyticsPDF/AnalyticsPDF'

type TableActionsProps = {
  onReload: () => void
  isLoading: boolean
}

const TableActions = ({ onReload, isLoading }: TableActionsProps) => {
  const { id, dataType } = useParams() as {
    id: string
    dataType: 'visits' | 'events' | 'navigation'
  }

  const handleClearData = useCallback(async () => {
    try {
      const { success = false } = await getAPI('/api/analytics/reset', {
        projectId: id as string,
        dataType: dataType as string,
      })
      if (success) {
        onReload()
      } else {
        console.error('Failed to clear data')
      }
    } catch (error) {
      console.error('Failed to reset data:', error)
    }
  }, [dataType, id, onReload])

  return (
    <>
      <Button variant="outline" onClick={onReload}>
        <RefreshCw className={isLoading ? 'animate-spin' : ''} />
        Refresh
      </Button>
      {/*TODO: create export function*/}
      {/*<BlobProvider document={<AnalyticsPDF dataType={dataType} />}>*/}
      {/*  {({ url }) => (*/}
      {/*    <a href={url!} rel="noopener noreferrer" target="_blank">*/}
      <Button variant="outline">Export PDF</Button>
      {/*    </a>*/}
      {/*  )}*/}
      {/*</BlobProvider>*/}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="destructive">
            <Eraser />
            Clear
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently remove your
              data from our servers.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-end gap-x-2">
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
            <Button variant="outline" onClick={handleClearData}>
              Yes, reset data
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default TableActions