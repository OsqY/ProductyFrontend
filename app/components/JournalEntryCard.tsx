import { Delete, Edit } from "@mui/icons-material";
import { Box, IconButton, Typography, alpha } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/navigation";

const JournalEntryCard = ({ journalEntry }) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/journalEntry/${journalEntry.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        console.error('Failed to delete journal entry', response.statusText);
        return;
      }

      router.reload();
    } catch (error) {
      console.error('Error deleting journal entry:', error);
    }
  }
  return (

    <Box
      id="image"
      sx={(theme) => ({
        alignSelf: 'center',
        height: { xs: 250 },
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'url("/static/images/templates/templates-images/hero-light.png")'
            : 'url("/static/images/templates/templates-images/hero-dark.png")',
        backgroundSize: 'cover',
        borderRadius: '10px',
        marginTop: '20px',
        outline: '1px solid',
        outlineColor:
          theme.palette.mode === 'light'
            ? alpha('#BFCCD9', 0.5)
            : alpha('#9CCCFC', 0.1),
        boxShadow:
          theme.palette.mode === 'light'
            ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
            : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
        transition: '500ms',
        paddingX: 10,
        paddingY: 5,
        "&:hover": {
          boxShadow: theme.palette.mode === 'light'
            ? `0 0 34px 38px ${alpha('#9CCCFC', 0.2)}`
            : `0 0 44px 32px ${alpha('#033363', 0.2)}`,
        },
        position: 'relative', // Añadido para posicionar los botones
      })}
    >
      <Link href={`/user/journal/update/${journalEntry.id}`} style={{ textDecoration: 'none', paddingTop: 30 }}>
        <Typography
          component="h5"
          variant="h6"
          sx={{
            display: 'column',
            flexDirection: { xs: 'column', md: 'row' },
            alignSelf: 'center',
            textAlign: 'center',
            fontSize: 'clamp(2.5rem, 3vw, 4rem)',
            fontWeight: 'bold'
          }}
        >
          {journalEntry.name}
        </Typography>
      </Link>
      <Typography
        component="p"
        variant="body1"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignSelf: 'center',
          textAlign: 'center',
          fontWeight: 'bold'
        }}
      >
        {journalEntry.description}
      </Typography>

      <IconButton
        onClick={handleDelete}
        sx={{
          position: 'absolute',
          top: 10,
          right: 50,
          color: 'red',
        }}
      >
        <Delete />
      </IconButton>

      <Link href={`/user/journal/update/${journalEntry.id}`}>
        <IconButton
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            color: 'blue',
          }}
        >
          <Edit />
        </IconButton>
      </Link>
    </Box>
  )
}

export default JournalEntryCard;
