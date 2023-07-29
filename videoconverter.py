import vlc

def convert_video(input_file, output_file):
    vlc_instance = vlc.Instance()
    media = vlc_instance.media_new(input_file)
    media.get_mrl()  # This step is necessary to gather media information

    # Specify the codec options for the output video
    options = ':sout=#transcode{vcodec=mp4v,acodec=mpga,vb=800,ab=128}:standard{access=file,mux=mp4,dst=' + output_file + '}'

    # Create a new media with the transcoding options
    transcoded_media = vlc_instance.media_new(media.get_mrl(), options)

    # Start the transcoding process
    media_player = vlc_instance.media_player_new()
    media_player.set_media(transcoded_media)
    media_player.play()

    # Wait for the conversion to finish
    while media_player.get_state() != vlc.State.Ended:
        pass

    media_player.stop()

if __name__ == "__main__":

    for i in range(2,56):
        print(i)
        input_file_path = "/home/antoine/Git/ColombiaConGusto/videos/IMG_"+str(i)+".mov"  # Replace with the path to your input MOV file
        output_file_path = "/home/antoine/Git/ColombiaConGusto/videos/IMG_"+str(i)+".mp4"  # Replace with the desired output MP4 file path

        # input_file_path = "/home/antoine/Git/ColombiaConGusto/videos/IMG_1.mov"  # Replace with the path to your input MOV file
        # output_file_path = "/home/antoine/Git/ColombiaConGusto/videos/IMG_1.mp4"  # Replace with the desired output MP4 file path

        convert_video(input_file_path, output_file_path)

# import vlc

# def convert_mov_to_mp4(input_file, output_file):
#     """
#     Convert a video from MOV to MP4 using python-vlc.

#     Args:
#         input_file (str): The path to the input MOV file.
#         output_file (str): The path to the output MP4 file.
#     """

#     vlc_instance = vlc.Instance()
#     player = vlc_instance.media_player_new()

#     media = vlc_instance.media_new(input_file)
#     player.set_media(media)

#     player.play()

#     # Get the output stream
#     output_stream = player

#     # Set the output format to MP4
#     output_stream.set_output_format('mp4')

#     # Write the output stream to the output file
#     output_stream.open(output_file)

#     # Wait for the output stream to finish writing
#     output_stream.wait()

# if __name__ == "__main__":
#     input_file = "/home/antoine/Git/ColombiaConGusto/videos/IMG_1.mov"
#     output_file = "/home/antoine/Git/ColombiaConGusto/videos/IMG_1.mp4"

#     convert_mov_to_mp4(input_file, output_file)