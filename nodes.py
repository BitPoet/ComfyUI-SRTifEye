class SRTifEyeNode:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
            }
        }

    RETURN_TYPES = ("STRING")
    RETURN_NAMES = ("noop")
    FUNCTION = "noop"
    CATEGORY = "BitPoet/Audio"
    DESCRIPTION = "Prototype UI for easy manual creation of SRT files."

    def noop(self):
        return ("Dummy")
