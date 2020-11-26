package com.lti.repository;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.lti.entity.Question;
import com.lti.entity.Subject;

public interface QuestionRepo extends GenericRepo {

	void save(Question question);

	List fetchQuestionsBySubject(int subjectId);

	List fetchQuestionBySubjectAndLevel(int subjectId, int level);

	boolean addQuestionFromCsv(String targetFile, Subject subject) throws IOException;

}