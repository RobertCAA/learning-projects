import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Add as AddIcon,
  EmojiEmotions as EmojiIcon,
  VideoCameraBack as VideoIcon,
  PersonAdd as PersonAddIcon,
  Image as ImageIcon,
  DateRange as DateIcon,
} from "@mui/icons-material";
import React, { useState } from "react";
import { Box, Stack } from "@mui/system";
import styled from "@emotion/styled";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "10px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title='Add'
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50%-25)", md: 30 },
        }}
      >
        <Fab color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          width={400}
          height={200}
          padding={3}
          bgcolor={"Background.default"}
          color='text.primary'
          borderRadius={5}
        >
          <Typography variant='h6' color='gray' textAlign='center'>
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src='https://webcdn.hirezstudios.com/paladins/wp-content/uploads/2020/06/seris-512.gif'
            />
            <Typography fontWeight={500} variant='span'>
              John Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id='outlined-multiline-static'
            multiline
            rows={3}
            placeholder="What's on your mind?"
          />
          <Stack direction='row' gap={1} mt={2} mb={3}>
            <EmojiIcon color='primary' />
            <ImageIcon color='secondary' />
            <VideoIcon color='success' />
            <PersonAddIcon color='error' />
          </Stack>
          <ButtonGroup
            fullWidth
            variant='contained'
            aria-label='outlined primary button group'
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
