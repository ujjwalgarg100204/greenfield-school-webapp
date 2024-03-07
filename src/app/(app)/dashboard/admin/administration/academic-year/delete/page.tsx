"use client";
import { type AcademicYear } from "@prisma/client";
import { type FC, useState } from "react";
import { toast } from "react-hot-toast";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "~/app/next-ui";
import { api } from "~/trpc/react";
import { getAcademicStr } from "../utils";
import { useAllAcademicYrCtx } from "~/app/(app)/dashboard/_contexts/AllAcademicYrCtx";

const AcademicYearDeletePage: FC = () => {
    const utils = api.useUtils();
    const { mutate } = api.academicYear.deleteOne.useMutation({
        async onSuccess() {
            toast.success("🎉 Academic Year successfully created submitted 🎉");
            await utils.academicYear.getAll.invalidate();
        },
        onError(err) {
            console.error(err);
            toast.error(err.message);
        },
    });
    const { allAcademicYrs } = useAllAcademicYrCtx();
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const [selectedYr, setSelectedYr] = useState<AcademicYear | null>(null);
    const deleteClickHandler = (yr: AcademicYear) => {
        return () => {
            setSelectedYr(yr);
            onOpen();
        };
    };
    const deleteAcademicYrHandler = () => {
        if (selectedYr) {
            mutate(selectedYr.id);
        }
        onClose();
    };

    return (
        <div className="space-y-4">
            <h3 className="text-xl font-semibold">Delete academic year</h3>
            <div className="flex gap-4">
                <Modal
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    isDismissable={false}
                    isKeyboardDismissDisabled={true}
                >
                    <ModalContent>
                        {onClose => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">
                                    Are you sure that you want to delete
                                    Academic Year {getAcademicStr(selectedYr!)}?
                                </ModalHeader>
                                <ModalBody>
                                    <p className="text-rose-500">
                                        This operation is irreversible, so you
                                        better be sure, what you are doing
                                    </p>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onPress={onClose}>
                                        Go Back
                                    </Button>
                                    <Button
                                        color="danger"
                                        variant="light"
                                        onPress={deleteAcademicYrHandler}
                                    >
                                        DELETE
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
                {allAcademicYrs.map((yr, i) => (
                    <Card key={yr.id}>
                        <CardHeader className="text-lg font-semibold">
                            Academic Year #{i + 1}
                        </CardHeader>
                        <CardBody className="grid grid-cols-2 gap-x-2 gap-y-1">
                            <span className="font-semibold">Start Date: </span>
                            <span>
                                {yr.startDate.toLocaleDateString("en-US", {})}
                            </span>
                            <span className="font-semibold">End Date: </span>
                            <span>
                                {yr.endDate.toLocaleDateString("en-US", {})}
                            </span>
                            <div className="col-span-2">
                                <Button
                                    color="danger"
                                    className="my-2 w-full font-bold"
                                    onClick={deleteClickHandler(yr)}
                                >
                                    Delete
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default AcademicYearDeletePage;
