'use client'

import JournalForm from "@/app/components/JournalForm";
import { Box, Container, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UpdateJournalPage = () => {
  const pathname = usePathname();
  const router = useRouter();

  let pathnameSplitted = pathname.split("/")
  let id = Number.parseInt(pathnameSplitted[4])

  const [journalEntry, setJournalEntry] = useState(null)

  useEffect(() => {
    const fetchJournalEntry = async () => {
      if (!id) return

      try {
        const response = await fetch(`/api/journalEntry/${id}`)

        if (!response.ok) {
          console.error('Failed to fetch todo:', response.statusText)
          router.push('/user/journalEntry')
        }

        const data = await response.json();
        setJournalEntry(data);
      } catch (error) {
        console.error('Error fetching todo', error);
      }
    };

    fetchJournalEntry();
  }, [id, router])

  return (
    <Box
      id="todos"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        {/* <Typography variant="h4" component="h3" marginTop={0}> */}
        {/*   {isLoading && ( */}
        {/*     <div>Loading...</div> */}
        {/*   ) || */}
        {/*     !user && ( */}
        {/*       <div>Redirecting...</div> */}
        {/*     )} */}
        {/* </Typography> */}
        <Typography
          variant="h1"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignSelf: 'center',
            textAlign: 'center',
            fontSize: 'clamp(3.5rem, 10vw, 4rem)',
          }}
        >
          Update Journal Entry
        </Typography>
        {journalEntry ? <JournalForm journal={journalEntry} /> : <p>Loading...</p>}
      </Container>
    </Box>


  )
}

export default UpdateJournalPage;
